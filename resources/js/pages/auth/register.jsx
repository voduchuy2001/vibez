import Button from "@/components/client/button";
import InputError from "@/components/client/input-error";
import InputLabel from "@/components/client/input-label";
import TextInput from "@/components/client/text-input";
import ClientLayout from "@/layouts/client-layout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <ClientLayout>
            <Head title="Register" />

            <section class="gi-register py-[40px] max-[767px]:py-[30px]">
                <div class="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                    <div class="section-title-2 w-full mb-[20px] pb-[20px] flex flex-col justify-center items-center">
                        <h2 class="gi-title mb-[0] font-manrope text-[26px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1]">
                            Register<span></span>
                        </h2>
                        <p class="max-w-[400px] mt-[15px] text-[14px] text-[#777] text-center leading-[23px]">
                            Best place to buy and sell digital products.
                        </p>
                    </div>
                    <div class="flex flex-wrap w-full">
                        <div class="gi-register-wrapper max-w-[934px] my-[0] mx-auto px-[12px]">
                            <div class="gi-register-container border-[1px] border-solid border-[#eee] p-[30px] text-left bg-[#fff] rounded-[5px] max-[575px]:p-[15px]">
                                <div class="gi-register-form">
                                    <form
                                        onSubmit={submit}
                                        class="flex flex-row flex-wrap mx-[-15px] gap-y-4"
                                    >
                                        <span class="gi-register-wrap gi-register-half w-[50%] px-[15px]">
                                            <InputLabel required={true}>
                                                Name
                                            </InputLabel>
                                            <TextInput
                                                id="name"
                                                name="name"
                                                value={data.name}
                                                className="mt-1 block w-full"
                                                autoComplete="name"
                                                onChange={(e) =>
                                                    setData(
                                                        "name",
                                                        e.target.value,
                                                    )
                                                }
                                                required
                                            />

                                            <InputError
                                                message={errors.name}
                                                className="mt-2"
                                            />
                                        </span>

                                        <span class="gi-register-wrap gi-register-half w-[50%] px-[15px]">
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

                                        <span class="gi-register-wrap gi-register-half w-[50%] px-[15px]">
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

                                        <span class="gi-register-wrap gi-register-half w-[50%] px-[15px]">
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

                                        <span class="gi-register-wrap gi-register-btn flex flex-row justify-between items-center w-full px-[15px] max-[767px]:flex-col ">
                                            <span class="text-[#777] text-[14px] tracking-[0.02rem]">
                                                Already have an account?
                                                <Link
                                                    href={route("login")}
                                                    class="ml-[10px] text-[#4b5966] text-[14px] transition-all duration-[0.3s] ease-in-out hover:text-[#5caf90]"
                                                >
                                                    Login
                                                </Link>
                                            </span>
                                            <Button
                                                type="submit"
                                                class="gi-btn-1 py-[8px] px-[15px] bg-[#4b5966] text-[#fff] border-[0] transition-all duration-[0.3s] ease-in-out overflow-hidden text-center text-[14px] font-semibold relative rounded-[5px] max-[767px]:mt-[15px] hover:bg-[#5caf90]"
                                            >
                                                Register
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
