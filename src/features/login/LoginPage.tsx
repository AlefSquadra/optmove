import { wabtecLogin2 } from "@assets/images";
import { Button, Text } from "@fluentui/react-components";
import { useAuth } from "@shared/hooks/useAuth";
import { Controller, useForm } from "react-hook-form";

type LoginFormData = {
  username: string;
  password: string;
};

const LoginPage = () => {
  const { handleDefaultLogin } = useAuth();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    handleDefaultLogin(data);
  };

  return (
    <div className="flex h-screen w-full">
      <div className="h-full w-[55%]">
        <img src={wabtecLogin2} alt="Background" className="h-full w-full object-contain xl:object-cover" />
      </div>

      <div className="flex w-[45%] items-center justify-center bg-white p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="flex w-full max-w-md flex-col gap-6">
          <Text weight="bold" size={600} align="center" className="text-primary-color tracking-[8px]">
            Service Monitor
          </Text>

          <div className="flex flex-col gap-6">
            {/* Username */}
            <div className="relative">
              <Controller
                name="username"
                control={control}
                rules={{ required: "Usuário obrigatório" }}
                render={({ field }) => {
                  const isFilled = field.value?.toString().length > 0;

                  return (
                    <div className="relative">
                      <input
                        id="username"
                        {...field}
                        placeholder=" "
                        className={`peer block w-full rounded-lg border ${
                          errors.username ? "border-red-500" : "border-gray-300"
                        } focus:border-primary-color bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:ring-0 focus:outline-none`}
                      />
                      <label
                        htmlFor="username"
                        className={`absolute start-2 z-10 origin-[0] transform bg-white px-2 text-sm text-gray-500 transition-all ${
                          isFilled ? "top-2 -translate-y-4 scale-75" : "top-1/2 -translate-y-1/2 scale-100"
                        } peer-focus:text-primary-color peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75`}
                      >
                        Usuário
                      </label>
                    </div>
                  );
                }}
              />
              {errors.username && (
                <Text size={200} className="mt-1 text-red-500">
                  {errors.username.message}
                </Text>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <Controller
                name="password"
                control={control}
                rules={{ required: "Senha obrigatória" }}
                render={({ field }) => {
                  const isFilled = field.value?.toString().length > 0;

                  return (
                    <div className="relative">
                      <input
                        id="password"
                        type="password"
                        {...field}
                        placeholder=" "
                        className={`peer block w-full rounded-lg border ${
                          errors.password ? "border-red-500" : "border-gray-300"
                        } focus:border-primary-color bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:ring-0 focus:outline-none`}
                      />
                      <label
                        htmlFor="password"
                        className={`absolute start-2 z-10 origin-[0] transform bg-white px-2 text-sm text-gray-500 transition-all ${
                          isFilled ? "top-2 -translate-y-4 scale-75" : "top-1/2 -translate-y-1/2 scale-100"
                        } peer-focus:text-primary-color peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75`}
                      >
                        Senha
                      </label>
                    </div>
                  );
                }}
              />
              {errors.password && (
                <Text size={200} className="mt-1 text-red-500">
                  {errors.password.message}
                </Text>
              )}
            </div>
          </div>

          <Button
            type="submit"
            appearance="primary"
            shape="circular"
            className="mt-2 h-[54px] w-full rounded-[50px] text-lg font-bold"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export { LoginPage };
