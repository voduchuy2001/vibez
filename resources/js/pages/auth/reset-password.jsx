import InputError from "@/components/client/input-error";
import InputLabel from "@/components/client/input-label";
import TextInput from "@/components/client/text-input";
import ClientLayout from "@/layouts/client-layout";
import { Head, Link, useForm } from "@inertiajs/react";
import Button from "@/components/client/button";

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.store"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <ClientLayout>
            <Head title="Reset Password" />

            <section class="gi-register py-[40px] max-[767px]:py-[30px]">
                <div class="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                    <div class="section-title-2 w-full mb-[20px] pb-[20px] flex flex-col justify-center items-center">
                        <h2 class="gi-title mb-[0] font-manrope text-[26px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1]">
                            Reset Password<span></span>
                        </h2>
                        <p class="max-w-[400px] mt-[15px] text-[14px] text-[#777] text-center leading-[23px]">
                            Enter your new password and confirm it to reset your
                            password.
                        </p>
                    </div>
                    <div className="flex w-full justify-center px-[12px]">
                        <div className="gi-register-wrapper max-w-[500px] w-full my-0 mx-auto">
                            <div className="gi-register-container border border-solid border-[#eee] p-[30px] text-left bg-[#fff] rounded-[8px] max-[575px]:p-[20px]">
                                <div className="gi-register-form">
                                    <form
                                        onSubmit={submit}
                                        className="flex flex-col gap-y-4"
                                    >
                                        <span className="gi-register-wrap w-full">
                                            <InputLabel required={true}>
                                                Email
                                            </InputLabel>
                                            <TextInput
                                                id="email"
                                                type="text"
                                                name="email"
                                                value={data.email}
                                                className="mt-1 block w-full"
                                                autoComplete="username"
                                                onChange={(e) =>
                                                    setData(
                                                        "email",
                                                        e.target.value,
                                                    )
                                                }
                                                required
                                            />
                                            <InputError
                                                message={errors.email}
                                                className="mt-2"
                                            />
                                        </span>

                                        <span className="gi-register-wrap w-full">
                                            <InputLabel required={true}>
                                                Password
                                            </InputLabel>
                                            <TextInput
                                                id="password"
                                                type="password"
                                                name="password"
                                                value={data.password}
                                                className="mt-1 block w-full"
                                                autoComplete="new-password"
                                                onChange={(e) =>
                                                    setData(
                                                        "password",
                                                        e.target.value,
                                                    )
                                                }
                                                required
                                            />
                                            <InputError
                                                message={errors.password}
                                                className="mt-2"
                                            />
                                        </span>

                                        <span className="gi-register-wrap w-full">
                                            <InputLabel required={true}>
                                                Password Confirmation
                                            </InputLabel>
                                            <TextInput
                                                id="password_confirmation"
                                                type="password"
                                                name="password_confirmation"
                                                value={
                                                    data.password_confirmation
                                                }
                                                className="mt-1 block w-full"
                                                autoComplete="new-password"
                                                onChange={(e) =>
                                                    setData(
                                                        "password_confirmation",
                                                        e.target.value,
                                                    )
                                                }
                                                required
                                            />
                                            <InputError
                                                message={
                                                    errors.password_confirmation
                                                }
                                                className="mt-2"
                                            />
                                        </span>

                                        <span className="gi-register-wrap gi-register-btn flex flex-col items-center w-full">
                                            <span className="text-[#777] text-[14px] tracking-[0.02rem] mb-4">
                                                Already have an account?
                                                <Link
                                                    href={route("login")}
                                                    className="ml-[5px] text-[#4b5966] text-[14px] transition-all duration-[0.3s] ease-in-out hover:text-[#5caf90]"
                                                >
                                                    Login
                                                </Link>
                                            </span>
                                            <Button
                                                type="submit"
                                                className="gi-btn-1 py-[10px] px-[20px] bg-[#4b5966] text-white border-0 transition-all duration-300 ease-in-out rounded-[5px] w-full flex items-center justify-center whitespace-nowrap hover:bg-[#5caf90]"
                                            >
                                                Reset Password
                                            </Button>
                                        </span>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ClientLayout>
    );
}
