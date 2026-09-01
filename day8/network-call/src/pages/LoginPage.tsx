import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import axios from "axios";
import { useLoginStore } from "@/stores/useLogin";

function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const loginUser = useLoginStore((state) => state.login);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const url = "https://comicroad-us.backendless.app/api/users/login";
      const response = await axios.post(url, {
        login: email,
        password: password,
      });
      const userData = response.data;
      const userToken = userData["user-token"];
      alert("Login Succes!");
      loginUser(userData, userToken);
    } catch (error) {
      console.log("error");
      alert("Login Failed!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-100 mx-auto border-2 border-black mt-10 p-8 space-y-4">
      <p>hello</p>
      <Label>Email</Label>
      <Input type="email" onChange={(e) => setEmail(e.target.value)} />
      <Label>Password</Label>
      <Input type="password" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <Button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? "Loading" : "Submit"}
      </Button>
    </div>
  );
}
export default LoginPage;
