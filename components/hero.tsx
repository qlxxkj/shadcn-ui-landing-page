// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] w-full flex items-center justify-center overflow-hidden border-b border-accent">
      <div className="max-w-screen-xl w-full flex flex-col lg:flex-row mx-auto items-center justify-between gap-y-14 gap-x-10 px-6 py-12 lg:py-0">
        <div className="max-w-xl">
          {/* <Badge className="rounded-full py-1 border-none">
            Just released v1.0.0
          </Badge> */}
          <h1 className="mt-6 max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] tracking-tight">
            跨境智链，一迅千里
          </h1>
          <p className="mt-6 max-w-[60ch] xs:text-lg">
            多平台多店铺智能管家，库存、订单、物流一屏掌控.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full text-base"
            >
              开始试用 <ArrowUpRight className="!h-5 !w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full text-base shadow-none"
            >
              <CirclePlay className="!h-5 !w-5" /> 观看演示
            </Button>
          </div>
        </div>
              <div className="relative lg:max-w-lg xl:max-w-xl w-full rounded-xl aspect-[3/2] shadow-md">
          <Image
            src="/index.svg"
            fill
            loading="lazy"
            alt=""
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
