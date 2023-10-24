import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { setToken, setUser } from "../store/reducers/authSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(6).max(18).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitForm = (data) => {
    axios
      .post("http://localhost:3000/login", data)
      .then((res) => {
        const { accessToken, user } = res.data;
        dispatch(setToken(accessToken));
        dispatch(setUser(user));
        navigate("/");
        reset();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="col-span-full lg:col-span-5">
      <div className="flex items-center justify-center p-3 mx-1 mt-5">
        <div className="text-2xl">Swag Labs</div>
      </div>

      <div className="mt-8 p-5 mx-auto w-full max-w-lg rounded-lg border-2 border-gray-100">
        <form
          action=""
          className="flex flex-col space-y-4"
          onSubmit={handleSubmit(onSubmitForm)}
        >
          {/* Email */}
          <div>
            <input
              type="email"
              id="email"
              name="email"
              {...register("email")}
              placeholder="Email"
              className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm"
            />
            <p className="error text-sm text-red-500 ml-4">
              {errors.email?.message}
            </p>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              id="password"
              name="password"
              {...register("password")}
              placeholder="Password"
              className="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm"
            />
            <p className="error text-sm text-red-500 ml-4">
              {errors.password?.message}
            </p>
          </div>

          <button
            type="submit"
            className="w-full rounded bg-emerald-950 py-2 px-4 text-white font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
