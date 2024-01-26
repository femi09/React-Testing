import { useForm } from "./useForm";
import { renderHook, act } from "@testing-library/react-hooks";

test("values should be empty object when first rendered", () => {
    const { result } = renderHook(() => useForm());

    const field = result.current.register("field");

      const onSubmit = jest.fn();

      act(() => {
        field.onChange({ target: { value: "test" } });
      });

      act(() => {
        result.current.handleSubmit(onSubmit)({ preventDefault: jest.fn() });
      });

expect(onSubmit).toHaveBeenCalledTimes(1);
expect(onSubmit).toHaveBeenCalledWith({ field: "test" });

expect(result.current.values.field).toBe("test");

});

//A test that calls functions returned from a custom hook that changes states 
//should be wrapped in a call to the act function