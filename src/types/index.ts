export interface iSellingPoint {
  compulsory: boolean;
  name: "Basic" | "Engineer" | "Brand";
  active: boolean;
  price: number;
  annotation: string;
  services: string[];
}

export interface iOptional {
  name: string;
  price: number;
  active: boolean;
}

export type dataItem = {
  heading: string;
  details: string;
};

export interface iModalData {
  showModal: boolean;
  name: string;
  modalData: dataItem[];
}

export type ModalParams = Omit<iModalData, "showModal">;
