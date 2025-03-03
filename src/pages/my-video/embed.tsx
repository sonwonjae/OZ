import { ChangeEventHandler, FormEventHandler } from 'react';

import * as LayoutStyled from '@components/Layout/LayoutStyle';
import Layout from '@components/Layout/Layout';
import { CommonForm, FormStyled, InputWithTitle } from '@components/MyVideo';

import ReactPlayer from 'react-player/lazy';

import { useRecoilState } from 'recoil';
import {
  isValidMyVideoEmbedLink,
  myVideoEmbedLink,
  myVideoEmbedLinkDuration,
  isValidMyVideoThumbnail,
  myVideoThumbnail,
  isValidMyVideoTitle,
  myVideoTitle,
  myVideoTags,
  myVideoDescription,
} from '@store/myVideoUpload';

import { useEmbedUploadMutation } from '@api/queries/upload';
import { Icon } from '@components/Common';

interface MyVideoEmbedProps {}

function MyVideoEmbed(prop: MyVideoEmbedProps) {
  const [isValidEmbedLink, setIsValidEmbedLink] = useRecoilState(isValidMyVideoEmbedLink);
  const [embedLink, setEmbedLink] = useRecoilState(myVideoEmbedLink);
  const [duration, setDuration] = useRecoilState(myVideoEmbedLinkDuration);
  const validateEmbedLink = () => {
    setIsValidEmbedLink(true);
  };
  const inValidateEmbedLink = () => {
    setIsValidEmbedLink(false);
  };
  const changeEmbedLink: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmbedLink(e.target.value);
  };
  const changeDuration = (duration: number) => {
    setDuration(duration);
  };

  const [isValidThumbnail] = useRecoilState(isValidMyVideoThumbnail);
  const [thumbnail] = useRecoilState(myVideoThumbnail);

  const [isValidTitle] = useRecoilState(isValidMyVideoTitle);
  const [title] = useRecoilState(myVideoTitle);

  const [tags] = useRecoilState(myVideoTags);

  const [description] = useRecoilState(myVideoDescription);

  const uploadMutation = useEmbedUploadMutation({
    onSuccess: (data) => {
      console.log({ data });
    },
    onError: (error) => {
      console.log({ error });
    },
  });

  const handleSubmitVideo: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!(isValidEmbedLink && isValidThumbnail && isValidTitle)) return;

    const formData = new FormData();
    formData.append('title', title as string);
    formData.append('duration', `${duration}`);
    formData.append('description', description);
    formData.append('videoUrl', embedLink as string);
    formData.append('thumbnail', thumbnail as File);
    tags.forEach((tag) => {
      formData.append('tags', tag);
    });

    uploadMutation.mutate(formData);
  };

  if (uploadMutation.isLoading) {
    return (
      <LayoutStyled.EmptyContainer>
        <Icon width={100} height={100} type="loading" />
        영상 업로드 중입니다...
      </LayoutStyled.EmptyContainer>
    );
  }

  return (
    <Layout hasNav={false} title="임베드 영상 업로드" hasBackButton>
      <FormStyled.Form onSubmit={handleSubmitVideo} noValidate>
        <InputWithTitle title="영상">
          <FormStyled.EmbedPlayerWrapper>
            {embedLink ? (
              <ReactPlayer
                url={embedLink}
                width="100%"
                height="100%"
                onReady={validateEmbedLink}
                onError={inValidateEmbedLink}
                onDuration={changeDuration}
                controls
              />
            ) : (
              <FormStyled.EmptyPlayerWrapper>임베드된 영상 없음</FormStyled.EmptyPlayerWrapper>
            )}
          </FormStyled.EmbedPlayerWrapper>
          <input required type="url" placeholder="영상링크를 입력해주세요." onChange={changeEmbedLink} />
        </InputWithTitle>

        <CommonForm isValid={isValidEmbedLink && isValidThumbnail && isValidTitle} />
      </FormStyled.Form>
    </Layout>
  );
}

export default MyVideoEmbed;
