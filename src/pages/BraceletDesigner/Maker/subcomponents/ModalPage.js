import { useContext, useEffect, useRef, useState } from 'react';
import '../resources/styling/modal.css';
import { createPageContentArray, findNavIndex, getNavItems, getPageContent, isNavPage } from '../resources/logic/modalLogic';


const ModalPage = ({showModal, pages, index, setIndex, setShowModal}) => {

  const modalRef = useRef();
  const prevRef = useRef();
  const nextRef = useRef();
  const titleRef = useRef();

  const [title, setTitle] = useState('Title');
  const [pageContent, setPageContent] = useState(<></>);

  const [showPrevNav, setShowPrevNav] = useState(true);
  const [showNextNav, setShowNextNav] = useState(true);

  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  //#region Effects

  useEffect(() => {
    if (showModal) {
      modalRef.current.style.display = "flex";
    } else {
      modalRef.current.style.display = "none";
    }
  }, [showModal]);

  useEffect(() => {
    if (pages) {
      setTotalPages(pages.length - 1);
      setPageContent(createPageContent());
    }
  }, [pages]);

  useEffect(() => {
    // set all properties
    let page = pages[index];
    page.title !== null
      ? setTitle(page.title)
      : setTitle('no title');

    // set page number
    setPageNumber(index);
    setPageContent(createPageContent());

    // determine whether to show navigation arrows
    determineShowPrevNav();
    determineShowNextNav();
  }, [index]);

  useEffect(() => {
    if (title === 'no title') {
      titleRef.current.className = "title-hide";
    } else {
      titleRef.current.className = "title";
    }
  }, [title]);

  useEffect(() => {
    if (showPrevNav) {
      showNavSymbol(prevRef);
    } else {
      hideNavSymbol(prevRef);
    }
  }, [showPrevNav]);

  useEffect(() => {
    if (showNextNav) {
      showNavSymbol(nextRef);
    } else {
      hideNavSymbol(nextRef);
    }
  }, [showNextNav]);

  //#endregion

  //#region Normal Methods

  const createPageContent = () => {
    let content = getPageContent(index, pages);
    return createPageContentArray(content, setIndex);
  }

  const determineShowPrevNav = () => {
    let result = showPrevNav;

    if (pages.length < 2) {
      result = false;
    } else {
      result = true;
    }

    setShowPrevNav(result);
  }

  const determineShowNextNav = () => {
    let result = showNextNav;

    if (pages.length < 2) {
      result = false;
    } else {
      result = true;
    }

    setShowNextNav(result);
  }

  const showNavSymbol = (ref) => {
    ref.current.className = "nav-symbol";
  }

  const hideNavSymbol = (ref) => {
    ref.current.className = "nav-symbol-hide";
  }

  //#endregion

  //#region Event Handlers

  const closeModal = () => {
    setShowModal(false);
    setIndex(0);
  }

  const clickPrev = () => {
    if (showPrevNav) {
      let newIndex = index;
      if (index === 0) {
        newIndex = pages.length - 1;
      } else {
        newIndex = index - 1;
      }
      setIndex(newIndex);
    }
  }

  const clickNext = () => {
    if (showNextNav) {
      let newIndex = index;
      if (index >= pages.length - 1) {
        newIndex = 0;
      } else {
        newIndex = index + 1;
      }
      setIndex(newIndex);
    }
  }

  const clickBackToNav = () => {
    setIndex(findNavIndex(pages));
  }

  //#endregion

  return (
    <div ref={modalRef} className='modal-container'>
      <div className='modal'>
        <div className="modal-header">
          <span className="close" onClick={closeModal}>&times;</span>
          <span className='title' ref={titleRef}>{title}</span>
          <div className='title-nav-div'>
            <span className='nav-symbol' ref={prevRef} onClick={clickPrev}>◀</span>
            <span className='page-number'>{pageNumber}/{totalPages}</span>
            <span className='nav-symbol' ref={nextRef} onClick={clickNext}>▶</span>
          </div>

        </div>
        <div className="modal-body">
          {pageContent}
        </div>
        <div className="modal-footer">
          {index !== 0
            ? <span className="modal-link" onClick={clickBackToNav}>Back to Navigation</span>
            : <></>
          }
          
        </div>
      </div>
      
    </div>
  );
}

export default ModalPage;