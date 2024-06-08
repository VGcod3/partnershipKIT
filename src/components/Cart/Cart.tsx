"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { iSellingPoint, iOptional } from "@/types";
import emailjs from "@emailjs/browser";

import { generateMessage } from "@/hooks/generateEmail";
import { cn } from "@/lib/utils";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { toggleOptionActive } from "@/redux/optionalSlice";
import { toggleSponsorship } from "@/redux/sponsorshipSlice";

const formSchema = z.object({
  company_name: z
    .string()
    .min(3, "Company name should be at least 3 characters long"),
  company_email: z.string().email("Invalid email address"),
});

type FormValues = z.infer<typeof formSchema>;

const SP = ({ name, price, compulsory }: iSellingPoint) => {
  const dispatch = useDispatch();

  const handleTogglePacket = () => {
    if (!compulsory) {
      dispatch(toggleSponsorship({ name }));
    }
  };

  return (
    <div className="border-b-2 w-full py-2 flex justify-between items-center">
      <span className="uppercase text-xl">{name}</span>
      <div className="flex gap-2 items-center">
        <span>{price}$</span>
        <Button
          disabled={compulsory}
          onClick={handleTogglePacket}
          size={"icon"}
          className={cn("w-5 h-5", compulsory && "cursor-not-allowed")}
        >
          <X size={18} />
        </Button>
      </div>
    </div>
  );
};

const OPT = ({ name, price }: iOptional) => {
  const dispatch = useDispatch();

  const handleToggleOption = () => {
    dispatch(toggleOptionActive({ name }));
  };

  return (
    <div className="border-b-2 w-full py-2 flex justify-between items-center">
      <span className="uppercase text-xl">{name}</span>
      <div className="flex gap-2 items-center">
        <span>{price}$</span>
        <Button onClick={handleToggleOption} size={"icon"} className="w-5 h-5">
          <X size={18} />
        </Button>
      </div>
    </div>
  );
};

export default function Cart() {
  const activeSellingPoints = useSelector(
    (state: RootState) => state.sponsorship
  ).filter((item) => item.active);

  const activeOptionalPoints = useSelector(
    (state: RootState) => state.optionalPackets
  ).filter((item) => item.active);

  const selligPointsPriceSum = activeSellingPoints.reduce(
    (acc, item) => acc + item.price,
    0
  );

  const activeOptionsPriceSum = activeOptionalPoints.reduce(
    (acc, item) => acc + item.price,
    0
  );

  const isDiscount = activeSellingPoints.length == 3;

  const totalSum =
    (isDiscount ? 0.9 : 1) * selligPointsPriceSum + activeOptionsPriceSum;

  const handleForm = (result: any) => {
    const serviceId: string = process?.env?.NEXT_PUBLIC_SERVICE_ID || "";
    const templateId: string = process?.env?.NEXT_PUBLIC_TEMPLATE_ID || "";
    const publicKey: string = process?.env?.NEXT_PUBLIC_PUBLIC_KEY || "";

    const stringEmail = generateMessage(
      result.company_name,
      activeSellingPoints,
      activeOptionalPoints,
      activeOptionsPriceSum,
      selligPointsPriceSum,
      totalSum,
      isDiscount
    );

    const templateParams = {
      company_email: result.company_email,
      message: stringEmail,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section className="flex flex-col items-center justify-center px-6 mx-auto w-full max-w-[1400px] gap-8 my-10">
      <h2 className={` uppercase text-3xl md:text-5xl my-16 text-center`}>
        Кошик
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-20">
        <div className="col-span-1 flex flex-col gap-5">
          <CartForm handleForm={handleForm} />
          <div className="leading-relaxed text-sm">
            <p>
              1. При купівлі одразу 3-х пакетів надається знижка в розмірі 10%.
            </p>
            <p>
              2. Для компаній-партнерів EBEC’2021 надається знижка в розмірі 5%
              на всі пропозиції.
            </p>
            <p>
              3. Усім партнерам, що працюють у сфері military, military-tech
              знижка 10%.
            </p>
            <p>* Знижки не поєднуються.</p>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-5">
          <h3 className="text-2xl">Пакети</h3>
          {activeSellingPoints.map((sp) => SP(sp))}

          {activeOptionalPoints.length ? (
            <>
              <h3 className="text-2xl">Опції</h3>
              {activeOptionalPoints.map((opt) => OPT(opt))}
            </>
          ) : null}
          <div className="flex w-full justify-between">
            <p>Сума:</p>

            <p className={cn("text-xl", isDiscount && "text-green-500")}>
              {totalSum}$
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const CartForm = ({ handleForm }: { handleForm: (result: any) => void }) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company_email: "",
      company_name: "",
    },
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  function onSubmit(values: FormValues) {
    handleForm(values);

    form.reset();
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col space-y-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          name="company_name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Назва компанії</FormLabel>
              <FormControl>
                <Input placeholder="Acme.inc" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="company_email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ваш email</FormLabel>
              <FormControl>
                <Input placeholder="company@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
