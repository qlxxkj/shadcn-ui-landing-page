import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";

const plans = [
  {
    name: "基础版（适合中小卖家）",
    price: 599,
    description:
      "支持​​：5个店铺绑定、10万条/月数据存储、工作日在线客服",
    features: [
      "进销存一体管理",
      "订单自动化处理",
      "基础财务统计",
    ],
    buttonText: "开始订阅",
  },
  {
    name: "专业版（适合中大型企业）",
    price: 1999,
    isRecommended: true,
    description:
      "支持​​：50个店铺绑定、50万条/月数据存储、24小时优先客服",
    features: [
      "基础版所有功能",
      "AI选品与Listing生成",
      "全流程广告管理",
      "高级风控模型",
    ],
    buttonText: "开始订阅",
    isPopular: true,
  },
  {
    name: "旗舰版（适合集团及连锁品牌）",
    price: 20000,
    description:
      "支持：无限店铺绑定、千万级数据存储、满足其他专属定制需求",
    features: [
      "专业版所有功能",
      "私有化部署+定制化功能开发",
      "专属客户成功经理+定期数据复盘",
      "SLA 99.9%可用性保障",
    ],
    buttonText: "开始订阅",
  },
];

const Pricing = () => {
  return (
    <div id="pricing" className="max-w-screen-lg mx-auto py-12 xs:py-20 px-6">
      <h1 className="text-4xl xs:text-5xl font-bold text-center tracking-tight">
        套餐价格
      </h1>
      <div className="mt-8 xs:mt-14 grid grid-cols-1 lg:grid-cols-3 items-center gap-8 lg:gap-0">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative bg-accent/50 border p-7 rounded-xl lg:rounded-none lg:first:rounded-l-xl lg:last:rounded-r-xl",
              {
                "bg-background border-[2px] border-primary py-12 !rounded-xl":
                  plan.isPopular,
              }
            )}
          >
            {plan.isPopular && (
              <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
                最受欢迎
              </Badge>
            )}
            <h3 className="text-lg font-medium">{plan.name}</h3>
            <p className="mt-2 text-4xl font-bold">¥{plan.price}/年</p>
            <p className="mt-4 font-medium text-muted-foreground">
              {plan.description}
            </p>
            <Separator className="my-6" />
            <ul className="space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CircleCheck className="h-4 w-4 mt-1 text-green-600" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              variant={plan.isPopular ? "default" : "outline"}
              size="lg"
              className="w-full mt-6 rounded-full"
            >
              {plan.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
