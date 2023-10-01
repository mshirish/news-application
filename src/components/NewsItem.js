import React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const NewsItem = ({ title, description, url, urlToImage, publishedAt }) => {
  return (
    <Card className="w-full max-w-[26rem] shadow-lg bg-custom-color">
      <CardHeader floated={false} color="blue-gray">
        <img src={urlToImage} alt="newsImage" />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium">
            {title}
          </Typography>
          <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
            {publishedAt}
          </Typography>
        </div>
        <Typography color="gray">{description}</Typography>
        <Typography color="gray"></Typography>
      </CardBody>
      <CardFooter className="pt-3">
        <Link to={url} target="_blank" rel="noreferrer">
          <Button size="lg" fullWidth={true}>
            Read More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default NewsItem;
