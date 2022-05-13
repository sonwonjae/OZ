import { ChangeEventHandler, FormEventHandler, MutableRefObject, useEffect, useRef } from 'react';

import { useRecoilState } from 'recoil';
import { isValidMyVideoTitle } from '@store/uploadVideo/valid';
import { myVideoTitle, myVideoDescription } from '@store/uploadVideo/common';

import TextareaAutosize from 'react-textarea-autosize';
import * as FormStyled from './FormStyle';
import ImgInput from './ImgInput';
import TagInput from './TagInput';
import InputWithTitle from './InputWithTitle';

interface CommonFormProps {
  isValid: boolean;
}

function CommonForm({ isValid }: CommonFormProps) {
  const [isValidTitle, setIsValidTitle] = useRecoilState(isValidMyVideoTitle);
  const [title, setTitle] = useRecoilState(myVideoTitle);
  const changeTitle: ChangeEventHandler<HTMLInputElement> = (e) => {
    setIsValidTitle(!!e.target.value);
    setTitle(e.target.value);
  };

  const [description, setDescription] = useRecoilState(myVideoDescription);
  const changeDescription: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setDescription(e.target.value);
  };

  return (
    <>
      <InputWithTitle title="썸네일 이미지">
        <ImgInput />
      </InputWithTitle>

      <InputWithTitle title="제목">
        <input required type="text" placeholder="제목을 입력해주세요." onChange={changeTitle} value={title as string} />
      </InputWithTitle>

      <InputWithTitle title="태그">
        <TagInput />
      </InputWithTitle>

      <InputWithTitle title="설명">
        <TextareaAutosize placeholder="내용을 입력해주세요." onChange={changeDescription} value={description} />
      </InputWithTitle>

      <FormStyled.SubmitFixContainer>
        <FormStyled.SubmitWrapper>
          <FormStyled.Submit type="submit" disabled={!isValid}>
            영상 업로드 하기
          </FormStyled.Submit>
        </FormStyled.SubmitWrapper>
      </FormStyled.SubmitFixContainer>
    </>
  );
}

export default CommonForm;
