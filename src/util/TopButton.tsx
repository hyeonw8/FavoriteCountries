import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const TopButton = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  const scrollToTop = (): void => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

  }, []);

  return (
    <>
      {showButton && (
        <div className='relative'>
          <button onClick={scrollToTop} type="button" className='fixed right-10 bottom-7 w-[60px] h-[60px] rounded-[50%] bg-slate-400'>
            <FontAwesomeIcon icon={faArrowUp as IconProp} size='xl'/>
          </button>
        </div>
      )}
    </>
  );
};

export default TopButton;
