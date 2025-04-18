import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  BookCheck,
  ChartPie,
  FolderSync,
  Goal,
  Users,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Goal,
    title: "进销存一体管理",
    description:
      "告别繁琐流程，输入关键词一键采集，AI选品，AI制作Listing，自动库存管理，1688一键下单",
  },
  {
    icon: BookCheck,
    title: "智能客服运营",
    description:
      "同步站内信息与邮件，支持自动规则回复，支持云黑名单，高效管理客户",
  },
  {
    icon: ChartPie,
    title: "高效订单处理",
    description:
      "支持多种自动化、智能化规则，支持扫描发货，实现快速订单发货",
  },
  {
    icon: Users,
    title: "全流程广告管理",
    description:
      "投放前挖掘优质词，投中使用自动规则提效，投后溯源、对比分析广告转化率",
  },
  {
    icon: FolderSync,
    title: "全流程风控管理",
    description:
      "支持库存/Listing/店铺/财务等多种预警模型，支持网格化设置数据权限",
  },
  {
    icon: Zap,
    title: "财务精准管理",
    description:
      "每日实时利润统计，订单级回款跟踪，自动提现，业财一体化管理",
  },
];

const Features = () => {
  return (
    <div className="bg-gray-50">
        <div
        id="features"
        className="max-w-screen-xl mx-auto w-full py-12 xs:py-20 px-6"
        >
        <h2 className="text-3xl xs:text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight sm:max-w-xl sm:text-center sm:mx-auto">
            核心功能
        </h2>
            <p className="mt-3 md:text-center xs:text-lg text-muted-foreground">
                打通跨境电商业务全流程，闭环管理业务，实现业绩增长
                </p>
        <div className="mt-8 xs:mt-14 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {features.map((feature) => (
            <Card
                key={feature.title}
                className="flex flex-col border rounded-xl overflow-hidden shadow-none"
            >
                <CardHeader>
                <feature.icon />
                <h4 className="!mt-3 text-xl font-bold tracking-tight">
                    {feature.title}
                </h4>
                <p className="mt-1 text-muted-foreground text-sm xs:text-[17px]">
                    {feature.description}
                </p>
                </CardHeader>
                <CardContent className="mt-auto px-0 pb-0">
                {/* <div className="bg-muted h-52 ml-6 rounded-tl-xl" /> */}
                </CardContent>
            </Card>
            ))}
        </div>
        </div>
    </div>
  );
};

export default Features;
