import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface IUser {
  id: number;
  email: string;
  name?: string;
  role?: "user" | "admin";
}

export interface ITypes {
  id: number;
  name: string;
}
export interface IBrand {
  id: number;
  name: string;
}
export interface IDevice {
  id: number;
  name: string;
  shortDesc: string;
  price: number;
  rating: number;
  img: string;
}
export interface DeviceCardProps extends IDevice {
  onClick: () => void;
}

export interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export interface DropdownSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export interface BuyNowProps {
  name: string;
  shortDesc: string;
  price: number;
  rating: number;
}
export interface DeviceInfoArray {
  id: number;
  title: string;
  description: string;
}
export interface SpecificationsProps {
  deviceArray: DeviceInfoArray[];
}

export interface QuantityCounterProps {
  initialValue?: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
  className?: string;
}

export interface TabArrayProps {
  value: string;
  name: string;
  img?: string;
}

export interface TabProps {
  tabs: TabArrayProps[];
  isActive?: string;
  className?: string;
  onChange: (value: string) => void;
}
