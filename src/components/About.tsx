import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Linkedin } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Company
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </p>
            </div>
            <Card className="right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src="https://i.pravatar.cc/150?img=58"
                  alt="user avatar"
                  className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">Ariel Quintana</CardTitle>
                <CardDescription className="font-normal text-primary">
                  Frontend Developer
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
                <p>
                  I really enjoy transforming ideas into functional software that
                  exceeds expectations
                </p>
              </CardContent>

              <CardFooter>
                <div>
                  <a
                    href="https://github.com/Rexlin28"
                    target="_blank"
                    className={buttonVariants({
                      variant: "ghost",
                      size: "sm",
                    })}
                  >
                    <span className="sr-only">Github icon</span>
                    <GitHubLogoIcon className="w-5 h-5" />
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    className={buttonVariants({
                      variant: "ghost",
                      size: "sm",
                    })}
                  >
                    <span className="sr-only">X icon</span>
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-foreground w-5 h-5"
                    >
                      <title>X</title>
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    className={buttonVariants({
                      variant: "ghost",
                      size: "sm",
                    })}
                  >
                    <span className="sr-only">Linkedin icon</span>
                    <Linkedin size="20" />
                  </a>
                </div>
              </CardFooter>
            </Card>
            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
