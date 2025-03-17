import Button from "@/components/client/button";
import InputError from "@/components/client/input-error";
import InputLabel from "@/components/client/input-label";
import TextInput from "@/components/client/text-input";
import ClientLayout from "@/layouts/client-layout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
            preserveScroll: true,
        });
    };

    return (
        <ClientLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <section className="gi-login py-[40px] max-[767px]:py-[30px]">
                <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                    <div className="section-title-2 w-full mb-[20px] pb-[20px] flex flex-col justify-center items-center">
                        <h2 className="gi-title mb-[0] font-manrope text-[26px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1]">
                            Login
                        </h2>
                        <p className="max-w-[400px] mt-[15px] text-[14px] text-[#777] text-center leading-[23px]">
                            Get access to your Orders, Wishlist and
                            Recommendations.
                        </p>
                    </div>
                    <div className="gi-login-content max-w-[1000px] m-auto flex flex-row max-[991px]:flex-col max-[1199px]:px-[12px] max-[991px]:w-full">
                        <div className="gi-login-box w-[50%] px-[15px] max-[991px]:w-full max-[991px]:p-[0]">
                            <div className="gi-login-wrapper max-w-[530px] my-[0] mx-auto">
                                <div className="gi-login-container p-[30px] max-[575px]:p-[15px] border-[1px] border-solid border-[#eee] rounded-[5px] text-left bg-[#fff]">
                                    <div className="gi-login-form">
                                        <form
                                            onSubmit={submit}
                                            className="flex flex-col space-y-4"
                                        >
                                            <span className="gi-login-wrap flex flex-col">
                                                <InputLabel required={true}>
                                                    Email Address
                                                </InputLabel>
                                                <TextInput
                                                    id="email"
                                                    type="email"
                                                    name="email"
                                                    value={data.email}
                                                    className="mt-1 block w-full"
                                                    autoComplete="username"
                                                    isFocused={true}
                                                    onChange={(e) =>
                                                        setData(
                                                            "email",
                                                            e.target.value,
                                                        )
                                                    }
                                                />

                                                <InputError
                                                    message={errors.email}
                                                />
                                            </span>

                                            <span className="gi-login-wrap flex flex-col">
                                                <InputLabel required={true}>
                                                    Password
                                                </InputLabel>
                                                <TextInput
                                                    id="password"
                                                    type="password"
                                                    name="password"
                                                    value={data.password}
                                                    className="mt-1 block w-full"
                                                    autoComplete="current-password"
                                                    onChange={(e) =>
                                                        setData(
                                                            "password",
                                                            e.target.value,
                                                        )
                                                    }
                                                />

                                                <InputError
                                                    message={errors.password}
                                                />
                                            </span>
                                            {canResetPassword && (
                                                <span className="gi-login-wrap flex flex-col gi-login-fp">
                                                    <label className="mb-[0] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]">
                                                        <Link
                                                            href={route(
                                                                "password.request",
                                                            )}
                                                            className="mt-[10px] text-[#777] text-[14px] font-normal tracking-[0] flex justify-end"
                                                        >
                                                            Forgot Password?
                                                        </Link>
                                                    </label>
                                                </span>
                                            )}

                                            <span className="gi-login-wrap gi-login-btn mt-[30px] flex flex-row justify-between items-center">
                                                <span className="text-[#777] text-[14px]">
                                                    <Link
                                                        href={route("register")}
                                                        className="text-[#4b5966] hover:text-[#5caf90]"
                                                    >
                                                        Create Account?
                                                    </Link>
                                                </span>
                                                <Button
                                                    type="submit"
                                                    disabled={processing}
                                                >
                                                    Login
                                                </Button>
                                            </span>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gi-login-box w-[50%] px-[15px] max-[991px]:w-full max-[991px]:p-[0] max-[991px]:hidden">
                            <div className="gi-login-img">
                                <img
                                    src="assets/img/common/login.png"
                                    alt="login"
                                    className="w-full rounded-[5px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ClientLayout>
    );
}
