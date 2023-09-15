import React from 'react';

type AlertTextProps = {
  text: string;
  secondText?: string;
};

export const AlertText = ({ text, secondText = '' }: AlertTextProps) => {
  const createMarkup = (input: string) => ({ __html: input.replace(/\n/g, '<br>') });

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-center text-xl font-normal flex leading-relaxed tracking-wider" dangerouslySetInnerHTML={createMarkup(text)} />
      {/* <p className="text-center text-lg font-normal tracking-wider mt-4" dangerouslySetInnerHTML={createMarkup(secondText)} /> */}
    </div>
  );
};
