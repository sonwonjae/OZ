import { useLoginMutation } from '@api/queries/test';

interface MyVideoProps {}

function MyVideo(prop: MyVideoProps) {
  const loginMutation = useLoginMutation({
    onSuccess: (data) => {
      console.log({ data });
    },
  });

  return (
    <button
      type="button"
      onClick={() => {
        loginMutation.mutate({
          email: 'sonwj0915@naver.com',
          password: 'a1s2d3f4',
        });
      }}
    >
      테스트
    </button>
  );
}

export default MyVideo;
