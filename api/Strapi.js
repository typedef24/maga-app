import axios from "axios";
import AppConstants from "../constants/AppConstants";

export default axios.create({
  baseURL: AppConstants.strapiBaseURL,
});
