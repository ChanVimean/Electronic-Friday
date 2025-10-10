import axios from "axios"

const fetchAPi = async () => {

  const res = await axios("https://friday-json.onrender.com/product");

  return res.data;
}

export default fetchAPi