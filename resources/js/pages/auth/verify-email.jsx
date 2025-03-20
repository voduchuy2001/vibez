import Button from "@/components/client/button";
import ClientLayout from "@/layouts/client-layout";
import { Head, useForm } from "@inertiajs/react";

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route("verification.send"));
    };

    return (
        <ClientLayout>
            <Head title="Email Verification" />

            <section class="gi-register py-[40px] max-[767px]:py-[30px]">
                <div class="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                    <div class="section-title-2 w-full mb-[20px] pb-[20px] flex flex-col justify-center items-center">
                        <h2 class="gi-title mb-[0] font-manrope text-[26px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1]">
                            Email Verification<span></span>
                        </h2>
                        <p class="max-w-[400px] mt-[15px] text-[14px] text-[#777] text-center leading-[23px]">
                            Thanks for signing up! Before getting started, could
                            you verify your email address by clicking on the
                            link we just emailed to you? If you didn't receive
                            the email, we will gladly send you another.
                        </p>
                    </div>
                    <div className="flex flex-wrap w-full">
                        <div className="gi-register-wrapper max-w-[934px] my-0 mx-auto px-4">
                            {status === "verification-link-sent" && (
                                <div className="mb-4 text-sm font-medium text-green-600 text-center">
                                    A new verification link has been sent to the
                                    email address you provided during
                                    registration.
                                </div>
                            )}

                            <form
                                onSubmit={submit}
                                className="w-full flex flex-col items-center"
                            >
                                <div className="mt-4 w-full flex justify-center">
                                    <Button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full sm:w-auto px-6 py-2 bg-[#4b5966] text-white rounded-md hover:bg-[#5caf90] transition-all duration-300"
                                    >
                                        Resend Verification Email
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </ClientLayout>
    );
}
