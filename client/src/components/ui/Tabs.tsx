import type { TabProps } from "@/types/types";

const Tabs = ({ ...props }: TabProps) => {
  return props.tabs.map((tab) => (
    <button
      key={tab.value}
      value={tab.value}
      className={`${props.className} ${props.isActive === tab.value ? "border-b-2 border-custom transition-all" : "border-b-2 border-transparent"}`}
      onClick={() => props.onChange(tab.value)}
    >
      {tab.img}
      {tab.name}
    </button>
  ));
};

export default Tabs;
