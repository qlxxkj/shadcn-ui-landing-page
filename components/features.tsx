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
    title: "进销存智能管理",
    description:
      "实现商品管理、自动库存更新、智能补货建议，支持与1688无缝对接，助力卖家实时掌握库存状态。",
  },
  {
    icon: BookCheck,
    title: "智能客服运营",
    description:
      "同步站内信息与邮件，调用亚马逊审核通过的官方话术模板，支持自动规则回复，AES-256加密存储云黑名单  ",
  },
  {
    icon: ChartPie,
    title: "高效订单处理",
    description:
      "支持订单规则自动化处理、智能打单、扫描发货及异常订单识别，全流程可视化，提升发货效率。",
  },
  {
    icon: Users,
      title: "高效运营工具",
    description:
      "集成ChatGPT与关键词数据库，帮助卖家自动生成高转化率Listing，提高商品曝光与转化。",
  },
  {
    icon: FolderSync,
    title: "全流程风控管理",
    description:
      "通过对库存、Listing、店铺、财务等模块的实时监控与预警模型，保障跨境业务稳定运行，支持数据权限分级配置。",
  },
  {
    icon: Zap,
    title: "财务精准管理",
    description:
      "支持每日利润统计、订单回款追踪与多平台财务对账，自动生成报表，便于税务合规管理。",
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
