import React from 'react'
import { useState } from 'react';

function Modal({ setModal, input, setInput }) {
  const [deadlineValue, setDeadlineValue] = useState("");
  const [companyValue, setCompanyValue] = useState("");
  const [jobValue, setJobValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");

  const handleFormSubmit = () => {
    const newJobPost = {
      id: Math.random(),
      deadline: deadlineValue,
      company: companyValue,
      job: jobValue,
      description: deadlineValue
    }
    setInput((prevJobPost) => [...prevJobPost, newJobPost])
    setModal(false)
  }

  return (
    <>
      <div className="bg"></div>

      <div className="modal">
        <div className="form-wrapper">
          <div className="input-wrapper">
            <label htmlFor="date">마감 날짜</label>
            <input
              type="date"
              id="date"
              className="input"
              value={input.deadline}
              onChange={(e) => {
                // let a = e.target.value.split('-').map(element => parseInt(element))
                setDeadlineValue(e.target.value);
              }}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="company">회사 이름</label>
            <input
              type="text"
              id="company"
              className="input"
              value={input.company}
              onChange={(e) => {
                setCompanyValue(e.target.value);
              }}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="job-title">직무 이름</label>
            <input
              type="text"
              id="job-title"
              className="input"
              value={input.job}
              onChange={(e) => {
                setJobValue(e.target.value);
              }}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="description">공고 내용</label>
            <textarea
              id="description"
              className="input"
              value={input.description}
              onChange={(e) => {
                setDescriptionValue(e.target.value);
              }}
            ></textarea>
          </div>
        </div>

        <div className="modal-btn-wrapper">
          <button className="modal-btn" onClick={handleFormSubmit}>
            등록
          </button>
          <button
            className="modal-btn"
            onClick={() => {
              setModal(false);
            }}
          >
            닫기
          </button>
        </div>
      </div>
    </>
  );
}

export default Modal