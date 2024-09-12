import Favorite from "@mui/icons-material/Favorite";
import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { Favorites } from "../components/Favorites";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


export const Homepage = () => {
  const navigate = useNavigate();
  const [like, setLike] = useState(false);

  useEffect(() => {
    if (!like) {
      toast('💔 Why no like!')
    } else {
      toast('💟 Nice!')
    }
  }, [like]);

  const handleFavor = () => {
    setLike(!like);
  };

  return (
    <>
      <div className="favorite-component">
        <Favorites favoriteStatus={like} favoriteAction={handleFavor} />
      </div>
      {like ? (
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      ) : null}
    </>
  );
};