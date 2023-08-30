'use client'
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { iSellingPoint, iOptional } from '@/types';
import emailjs from '@emailjs/browser';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { generateMessage } from '@/hooks/generateEmail';

import AnimatedElement from "@/hooks/AnimatedElement";

import { capture_it, anonymous_pro_regular, europeextendedRegular, europeextendedCbold, anonymous_pro_bold } from "../../fonts";


// Create a Yup schema for form validation
const validationSchema = Yup.object({
  company_name: Yup.string().required('Required'),
  company_email: Yup.string().email('Invalid email address').required('Required'),
});




const SP = ({ name, price }: iSellingPoint) => {
  return <div className="border-b-2 w-full py-4 flex justify-between items-center">
    <span className={`${europeextendedRegular.className} uppercase text-3xl`}>{name}</span>
    <span className={`${anonymous_pro_regular.className} uppercase text-2xl`}>{price}$</span>
  </div>
}

const OPT = ({ name, price }: iOptional) => {
  return <div className="border-b-2 w-full py-4 flex justify-between items-center">
    <span className={`${europeextendedRegular.className} uppercase text-3xl`}>{name}</span>
    <span className={`${anonymous_pro_regular.className} uppercase text-2xl`}>{price}$</span>
  </div>
}

export default function Cart() {
  const sellingPoints = useSelector((state: RootState) => state.sponsorship);
  const optionalPoints = useSelector((state: RootState) => state.optionalPackets);

  const inputRef = useRef<HTMLInputElement>(null);

  const activeSellingPoints = sellingPoints.filter(item => item.active);
  const activeOptionalPoints = optionalPoints.filter(item => item.active);

  const selligPointsPriceSum = activeSellingPoints.reduce((acc, item) => acc + item.price, 0);

  const activeOptionsPriceSum = activeOptionalPoints.reduce((acc, item) => acc + item.price, 0);

  const isDiscount = activeSellingPoints.length == 3;
  const totalSum = ((isDiscount ? 0.9 : 1) * selligPointsPriceSum) + activeOptionsPriceSum;

  const handleForm = (result: any) => {
    console.log({ activeSellingPoints, activeOptionalPOints: activeOptionalPoints, totalSum, ...result });

    const serviceId: string = process?.env?.NEXT_PUBLIC_SERVICE_ID || '';
    const templateId: string = process?.env?.NEXT_PUBLIC_TEMPLATE_ID || '';
    const publicKey: string = process?.env?.NEXT_PUBLIC_PUBLIC_KEY || '';


    const stringEmail = generateMessage(result.company_name, activeSellingPoints, activeOptionalPoints, activeOptionsPriceSum, selligPointsPriceSum, totalSum, isDiscount)

    const templateParams = {
      company_email: result.company_email,
      message: stringEmail

    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  const formik = useFormik({
    initialValues: {
      company_name: '',
      company_email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      handleForm(values);
      resetForm();
    },
  });


  return (
    <section className="flex flex-col items-center justify-center px-6 mx-auto w-full max-w-[1400px] gap-8 my-10">
      {/* <AnimatedElement direction="bottom"> */}
      <h2 className={`${capture_it.className} uppercase text-5xl md:text-7xl my-16 text-center`}>Кошик</h2>
      {/* </AnimatedElement> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-20">
        <div className="col-span-1 max-w-xl mx-auto w-full flex flex-col gap-5">
          <h3 className={`${europeextendedCbold.className} text-center text-4xl`}>Пакети</h3>
          {sellingPoints.filter(sp => sp.active).map(sp => SP(sp))}

          {optionalPoints.filter((opt) => opt.active).length ?
            <>
              <h3 className={`${europeextendedCbold.className} text-center text-4xl`}>Опції</h3>
              {optionalPoints.filter(opt => opt.active).map(opt => OPT(opt))}
            </>
            : null}

          <button onClick={() => inputRef.current?.focus()} className={`${anonymous_pro_regular.className} ${isDiscount ? 'text-green-300' : 'text-white'} text-2xl md:text-4xl bg-bec-bg rounded-2xl border-2 w-fit border-white px-10 py-2 md:self-end self-center`}>{totalSum}$</button>

        </div>
        <div className="col-span-1 flex flex-col gap-5">

          <form className="border-[3px] rounded-2xl py-6 px-14 gap-4 flex flex-col" onSubmit={formik.handleSubmit}                    >
            <input
              ref={inputRef}
              type="text"
              name="company_name"
              className="w-full mt-8 p-5 border-2 focus:border-bec-orange outline-none text-lg bg-transparent rounded-2xl"
              placeholder="Назва компанії"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.company_name} />
            {formik.touched.company_name && formik.errors.company_name ? (
              <div className="text-red-400">{formik.errors.company_name}</div>
            ) : null}
            <input
              type="email"
              name="company_email"
              className="w-full mt-8 p-5 border-2 focus:border-bec-orange outline-none text-lg bg-transparent rounded-2xl"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.company_email}
            />
            {formik.touched.company_email && formik.errors.company_email ? (
              <div className="text-red-400">{formik.errors.company_email}</div>
            ) : null}
            <button
              // disabled={!formik.isValid || formik.isSubmitting}
              className="border-2 rounded-md bg-[#443625] focus:border-bec-orange outline-none w-fit px-10 py-4 self-center text-md" type="submit">Submit</button>
          </form>
          <div className={`${anonymous_pro_regular.className}  leading-relaxed`}>
            <p>
              1. При купівлі одразу 3-х пакетів надається знижка в розмірі 10%.
            </p>
            <p>
              2. Для компаній-партнерів EBEC’2021 надається знижка в розмірі 5% на всі пропозиції.
            </p>
            <p>
              3. Усім партнерам, що працюють у сфері military, military-tech знижка 10%.
            </p>
            <p className={anonymous_pro_bold.className}>
              * Знижки не поєднуються.</p>
          </div>
        </div>
      </div>
    </section >
  )
}