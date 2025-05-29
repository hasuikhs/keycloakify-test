import type { PageProps } from "keycloakify/login/pages/PageProps";
import { useState } from "react";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";

export default function Login(props: PageProps<Extract<KcContext, { pageId: "login.ftl" }>, I18n>) {
    const { kcContext } = props;
    const { url, message } = kcContext;

    const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

    return (
        <form id="kc-form-login" onSubmit={() => setIsLoginButtonDisabled(true)} action={url.loginAction} method="post">
            {message !== undefined && (
                <div className="mb-4 p-4 rounded-md bg-red-50">
                    <div className="text-sm text-red-700">{message.summary}</div>
                </div>
            )}

            <div className="space-y-6">
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                        {!kcContext.login ? "로그인" : "회원가입"}
                    </label>
                    <div className="mt-1">
                        <input
                            tabIndex={1}
                            id="username"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            name="username"
                            defaultValue={kcContext.login?.username ?? ""}
                            type="text"
                            autoFocus={true}
                            autoComplete="off"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        비밀번호
                    </label>
                    <div className="mt-1">
                        <input
                            tabIndex={2}
                            id="password"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            name="password"
                            type="password"
                            autoComplete="off"
                        />
                    </div>
                </div>

                {kcContext.realm.rememberMe && (
                    <div className="flex items-center">
                        <input
                            tabIndex={3}
                            id="rememberMe"
                            name="rememberMe"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
                            로그인 상태 유지
                        </label>
                    </div>
                )}

                <div>
                    <button
                        tabIndex={4}
                        name="login"
                        id="kc-login"
                        type="submit"
                        disabled={isLoginButtonDisabled}
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                    >
                        로그인
                    </button>
                </div>
            </div>
        </form>
    );
} 