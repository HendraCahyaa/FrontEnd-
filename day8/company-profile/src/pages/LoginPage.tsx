import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { axiosInstance } from "@/lib/axios";
import { loginSchema, type LoginSchema } from "@/schemas/login";
import { useLoginStore } from "@/stores/useLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";

function LoginPage() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const { login } = useLoginStore();
  const navigate = useNavigate();

  const { register, handleSubmit, formState } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = async (values: LoginSchema) => {
    setLoading(true);
    try {
      const url = "/users/login";
      const { data } = await axiosInstance.post(url, {
        login: values.email,
        password: values.password,
      });
      alert("Login Success!");
      login({
        name: data.name,
        email: data.email,
        objectId: data.objectId,
        token: data["user-token"],
      });
      navigate("/home");
    } catch (error) {
      console.log("error");
      alert("Login Failed!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex font-sans">
      <div className="hidden relative overflow-hidden bg-blue-950 md:flex flex-col justify-between p-12">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1683064325134-3acfdef9c6d7?w=1000&h=1200&fit=crop&auto=format"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-br from-blue-950 via-blue-900/80 to-blue-700/30" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="relative z-10">
          <button
            onClick={() => navigate("/home")}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M2 8L6 4L10 8L14 4"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L6 8L10 12L14 8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.6"
                />
              </svg>
            </div>
            <span className="font-display font-700 text-xl text-white tracking-tight">
              NEXORA
            </span>
          </button>
        </div>

        <div className="relative z-10">
          <div className="text-cyan-400 text-4xl font-display mb-4">
            &ldquo;
          </div>
          <p className="font-display font-600 text-white text-2xl leading-snug mb-6">
            Building Digital Experiences That Move Businesses Forward.
          </p>
          <div className="flex items-center gap-3">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Marcus Reid"
              className="w-10 h-10 rounded-full object-cover border-2 border-white/20"
            />
            <div>
              <div className="text-white text-sm font-semibold">
                Marcus Reid
              </div>
              <div className="text-slate-400 text-xs">CEO, NEXORA</div>
            </div>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-3 gap-6">
          {[
            { v: "120+", l: "Projects" },
            { v: "50+", l: "Team Members" },
            { v: "15+", l: "Countries" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display font-700 text-2xl text-white">
                {s.v}
              </div>
              <div className="text-slate-400 text-xs mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <form
        onSubmit={handleSubmit(handleLogin)}
        className="px-8 md:px-0 py-20 mx-auto"
      >
        <p className="text-3xl tracking-wide pb-4">Welcome Back</p>
        <p className="text-zinc-500 text-sm pb-4">
          Sign in to manage your NEXORA content.
        </p>
        <div>
          <Label className="text-[14px] pb-2">Email</Label>
          <Input
            type="email"
            {...register("email")}
            className=" h-12 rounded-xl text-xl"
          />
          {formState.errors.email && (
            <p className="text-red-500 text-sm">
              {formState.errors.email.message}
            </p>
          )}
          <div className="flex justify-between pt-4">
            <Label className="text-[14px] pb-2">Password</Label>
            <p className="text-blue-700 text-[12px] pb-2">Forgot password?</p>
          </div>

          <Input
            type="password"
            {...register("password")}
            className="h-12 rounded-xl text-xl"
          />
          {formState.errors.password && (
            <p className="text-red-500 text-sm">
              {formState.errors.password.message}
            </p>
          )}
          <input type="checkbox" className="mt-4 border-2 w-4 h-4 mr-2" />
          <span className="text-[14px] ">Remember me for 30 days</span>
          <br />
          <Button
            type="submit"
            disabled={isLoading}
            className={
              "mt-4 w-full h-12 font-semibold text-[14px] rounded-xl bg-blue-600 hover:bg-blue-700 text-white"
            }
          >
            {isLoading ? "Loading" : "Sign In"}
          </Button>
          <Link
            to="/home"
            className="w-full h-12 flex items-center justify-center text-[14px] rounded-xl text-gray-900 hover:text-gray-700"
          >
            Enter as a guest
          </Link>
        </div>
      </form>
    </div>
  );
}
export default LoginPage;
