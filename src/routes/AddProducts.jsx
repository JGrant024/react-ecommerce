import { Form } from "react-router-dom";
import slugify from "slugify";

export async function action({ request }) {
  const formData = await request.formData();
  const name = formData.get();
}
