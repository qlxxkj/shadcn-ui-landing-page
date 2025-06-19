import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
import { CheckCircle, Lock, Server } from "lucide-react";
import Image from "next/image";

export default function SpapiIntegrationPage() {
    return (
        <div className= "max-w-5xl mx-auto p-6 space-y-10" >
        <section className="text-center space-y-4" >
            <h1 className="text-3xl font-bold" > Amazon SP - API 数据集成与支持能力 </h1>
                < p className = "text-muted-foreground" >
                    迅鸟ERP基于Amazon SP - API标准开发，面向Amazon卖家提供合规、稳定的数据采集、处理与自动化运营服务。
    </p>
        </section>

        < section className = "grid gap-6 md:grid-cols-2" >
            <Card>
            <CardContent className="p-4 space-y-2" >
                <h2 className="font-semibold text-lg" > 订单管理（Orders API）</h2>
                    < p > 自动获取订单详情与状态，完成闭环处理。</p>
                        </CardContent>
                        </Card>
                        < Card >
                        <CardContent className="p-4 space-y-2" >
                            <h2 className="font-semibold text-lg" > 商品信息管理（Catalog Items API）</h2>
                                < p > 同步Amazon商品目录、Listing详情，一键创建商品模板。</p>
                                    </CardContent>
                                    </Card>
                                    < Card >
                                    <CardContent className="p-4 space-y-2" >
                                        <h2 className="font-semibold text-lg" > 库存同步（Inventory API）</h2>
                                            < p > 动态更新库存状态，避免超卖，支持多平台共享库存池。</p>
                                                </CardContent>
                                                </Card>
                                                < Card >
                                                <CardContent className="p-4 space-y-2" >
                                                    <h2 className="font-semibold text-lg" > 广告优化（Advertising API）</h2>
                                                        < p > 读取广告数据，AI推荐关键词和优化投放策略。</p>
                                                            </CardContent>
                                                            </Card>
                                                            < Card >
                                                            <CardContent className="p-4 space-y-2" >
                                                                <h2 className="font-semibold text-lg" > 财务数据读取（Finances API）</h2>
                                                                    < p > 自动拉取回款、费用与结算数据，助力财务合规对账。</p>
                                                                        </CardContent>
                                                                        </Card>
                                                                        < Card >
                                                                        <CardContent className="p-4 space-y-2" >
                                                                            <h2 className="font-semibold text-lg" > 报告系统（Reports API）</h2>
                                                                                < p > 支持销售、退款、广告等多维报表自动生成与下载。</p>
                                                                                    </CardContent>
                                                                                    </Card>
                                                                                    </section>

                                                                                    < section className = "space-y-4" >
                                                                                        <h2 className="text-2xl font-bold" > 安全与合规保障 </h2>
                                                                                            < ul className = "list-disc list-inside space-y-2" >
                                                                                                <li><Lock className="inline mr-2 text-primary" /> AES - 256 静态数据加密与 TLS1.2 + 动态传输加密 </li>
                                                                                                    < li > <CheckCircle className="inline mr-2 text-primary" /> OAuth2.0 安全授权流程，Amazon账户无需密码绑定 </li>
                                                                                                        < li > <Server className="inline mr-2 text-primary" /> 权限网格控制，日志记录，符合GDPR与中国网络安全法 </li>
                                                                                                            </ul>
                                                                                                            </section>

                                                                                                            < section className = "space-y-4" >
                                                                                                                <h2 className="text-2xl font-bold" > API 授权操作指南 </h2>
                                                                                                                    < ol className = "list-decimal list-inside space-y-2" >
                                                                                                                        <li>在亚马逊开发者中心创建授权应用，获取 Client ID 与 Client Secret。</li>
                                                                                                                            < li > 在迅鸟ERP系统中输入上述凭证，点击“绑定 Amazon 店铺”。</li>
                                                                                                                                < li > 通过 OAuth2 跳转至亚马逊授权页面，授权后自动跳转回系统完成绑定。</li>
                                                                                                                                    < li > 系统自动拉取授权店铺的订单、广告、财务等数据模块。</li>
                                                                                                                                        </ol>
                                                                                                                                        </section>

                                                                                                                                        < section className = "space-y-4" >
                                                                                                                                            <h2 className="text-2xl font-bold" > 数据流转示意图 </h2>
                                                                                                                                                < div className = "rounded-xl overflow-hidden border shadow-md" >
                                                                                                                                                    <Image
            src="/amazon-spapi-flow.png"
    alt = "Amazon SP-API 流程图"
    width = { 960}
    height = { 540}
    className = "w-full h-auto"
        />
        </div>
        < p className = "text-sm text-muted-foreground text-center" >
            图示：Amazon数据流 → OAuth授权 → ERP模块处理 → 多端展示
                </p>
                </section>

                < section className = "text-center space-y-2" >
                    <a
          href="/privacy"
    className = "text-blue-600 underline text-sm"
        > 查看数据保护政策 </a>
        < br />
        <a
         href="/protocol"
    className = "text-blue-600 underline text-sm"
        > 查看服务使用条款 </a>
        </section>
        </div>
  );
}
