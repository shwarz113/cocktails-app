import React, {useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { RoutesEnum, routesSet } from "../shared/constants/routes";
import {
  fetchCocktailByIdAction,
  selectContent,
} from "../modules/content-page/slice/slice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Content } from "../modules/content-page";
const ContentPage = () => {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectContent);
  const cocktailId = (id || routesSet.values().next().value) as RoutesEnum;

  const fetchData = () => {
    if (!data?.[cocktailId]) {
      dispatch(fetchCocktailByIdAction(cocktailId));
    }
  };

  useEffect(() => {
    if (routesSet.has(cocktailId)) {
      fetchData();
    } else {
      navigate("/404");
    }
  }, [cocktailId]);

  if (data.loading) {
    return <div>Loading...</div>;
  }

  return <Content data={data[cocktailId]} />;
};

export default ContentPage;
