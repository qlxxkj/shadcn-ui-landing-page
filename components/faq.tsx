import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "lucide-react";

const faq = [
  {
        question: "系统是否支持与Amazon等的无缝对接？",
    answer:
      "支持。系统通过标准化SP-API接口与Amazon等主流平台实现商品管理、订单管理、库存同步、物流跟踪等全流程整合，减少人工操作，提高数据一致性。",
  },
  {
      question: "AI选品功能如何保证精准度？是否支持个性化设置？",
    answer:
      "系统基于亚马逊销售趋势、历史数据与关键词热度分析，通过AI模型进行爆款预测。同时支持用户自定义筛选条件，如价格、利润率、类目偏好、时效等，选品更灵活。",
  },
  {
      question: "是否具备多店铺统一管理能力？",
    answer:
      "具备。通过中央库存池管理机制，支持多平台库存实时同步与自动分配，库存不足时可触发补货流程，确保跨平台库存平衡",
  },
  {
      question: "客服系统是否能精准处理买家消息？",
    answer:
      "支持。系统识别高优先级消息（如投诉/退货）并自动标记，常规咨询采用智能回复机制，结合语义识别与关键词配置，有效提升客服响应效率。",
  },
  {
    question: "财务模块能否与第三方财务软件（如用友、金蝶）集成？",
    answer:
      "可。系统支持与用友、金蝶等财务软件集成，通过标准API接口同步订单、成本、收入等财务数据，构建业财一体化流程。",
  },
  {
      question: "系统如何保障数据安全？",
    answer:
      "采用AES-256数据加密、HTTPS安全传输、双因子身份验证等机制，并提供权限分级与日志审计功能，保障用户数据安全，符合Amazon数据安全合规性要求。",
  },
];

const FAQ = () => {
  return (
    <div id="faq" className="w-full max-w-screen-xl mx-auto py-8 xs:py-16 px-6">
      <h2 className="md:text-center text-3xl xs:text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tighter">
        高频问题
      </h2>
      <p className="mt-1.5 md:text-center xs:text-lg text-muted-foreground">
        {/* Quick answers to common questions about our products and services. */}
      </p>

      <div className="min-h-[550px] md:min-h-[320px] xl:min-h-[300px]">
        <Accordion
          type="single"
          collapsible
          className="mt-8 space-y-4 md:columns-2 gap-4"
        >
          {faq.map(({ question, answer }, index) => (
            <AccordionItem
              key={question}
              value={`question-${index}`}
              className="bg-accent py-1 px-4 rounded-xl border-none !mt-0 !mb-4 break-inside-avoid"
            >
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger
                  className={cn(
                    "flex flex-1 items-center justify-between py-4 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                    "text-start text-lg"
                  )}
                >
                  {question}
                  <PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="text-[15px]">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
