import { Suspense } from "react";
import type { KcContext } from "./KcContext";
import Template from "./Template";
import { useI18n } from "./i18n";
import Login from "./pages/Login";

export default function KcPage(props: { kcContext: KcContext }) {
    const { kcContext } = props;
    const { i18n } = useI18n({ kcContext });

    return (
        <Suspense>
            {(() => {
                switch (kcContext.pageId) {
                    case "login.ftl":
                        return (
                            <Template 
                                kcContext={kcContext} 
                                i18n={i18n}
                                doUseDefaultCss={false}
                                headerNode={null}
                            >
                                <Login 
                                    kcContext={kcContext} 
                                    i18n={i18n}
                                    Template={Template}
                                    doUseDefaultCss={false}
                                />
                            </Template>
                        );
                    default:
                        return (
                            <Template 
                                kcContext={kcContext} 
                                i18n={i18n}
                                doUseDefaultCss={false}
                                headerNode={null}
                            >
                                <div className="text-center">
                                    <h1 className="text-2xl font-bold text-gray-900">
                                        페이지를 찾을 수 없습니다
                                    </h1>
                                    <p className="mt-2 text-gray-600">
                                        요청하신 페이지가 존재하지 않습니다
                                    </p>
                                </div>
                            </Template>
                        );
                }
            })()}
        </Suspense>
    );
}
