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
    question: "系统是否支持与1688、Shopee等电商平台的无缝对接？",
    answer:
      "支持。系统通过标准化API接口实现与主流电商平台（如1688、亚马逊、Shopee）的订单、库存、物流数据实时同步，一键采集商品信息并自动更新库存状态，避免手动操作错误",
  },
  {
    question: "AI选品功能如何保证精准度？是否支持自定义规则？",
    answer:
      "AI选品基于市场趋势分析、历史销售数据及竞品动态，结合机器学习算法预测爆款潜力，准确率高达85%以上。同时支持自定义规则，例如设置价格区间、利润率、季节性需求等，满足个性化选品需求",
  },
  {
    question: "多店铺管理时，如何避免库存数据混乱？",
    answer:
      "系统采用“中央库存池”设计，实时汇总各平台库存数据，支持智能分配和预警。例如，当某店铺库存不足时，自动从中央池调拨或触发采购规则，确保库存动态平衡",
  },
  {
    question: "智能客服的自动回复是否会遗漏重要客户邮件？",
    answer:
      "系统通过语义分析识别高优先级邮件（如投诉、大额订单），自动转至人工处理；常规咨询则根据预设规则快速响应，并支持“云黑名单”过滤垃圾信息，保障客户体验",
  },
  {
    question: "财务模块能否与第三方财务软件（如用友、金蝶）集成？",
    answer:
      "支持。系统提供标准化数据接口，可自动同步订单收入、采购成本、物流费用等数据至第三方财务系统，实现业财一体化管理，减少重复录入",
  },
  {
    question: "数据安全性如何保障？是否有权限分级功能？",
    answer:
      "采用银行级加密技术，支持角色权限网格化设置（如仅财务人员可查看利润数据），操作日志全留存，并定期进行安全漏洞扫描与备份，确保数据零风险",
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
