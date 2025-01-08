import NewsPublish from '../publish-manages/NewsPublish';
import usePublished from '../publish-manages/usePublished';
import { Button } from 'antd';
export default function Unpublished() {
  const { dataSource, handlePublish } = usePublished(1);
  return (
    <div>
      <NewsPublish
        dataSource={dataSource}
        button={(id) => (
          <Button
            type="primary"
            onClick={() => handlePublish(id)}
          >
            发布
          </Button>
        )}
      ></NewsPublish>
    </div>
  );
}
