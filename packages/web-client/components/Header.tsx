import { FC } from "react";

type Props = {
  date: string;
  username?: string;
};

const Header: FC<Props> = ({ date, username }) => {
  return (
    <header className="flex justify-between font-Roboto pb-4 mb-4 border-b">
      <div>
        <div className="font-RobotoSlab text-3xl">Spell Together</div>
        <div>{date}</div>
      </div>
      {username ? <div className="leading-9">{username}</div> : <></>}
    </header>
  );
};

export default Header;
