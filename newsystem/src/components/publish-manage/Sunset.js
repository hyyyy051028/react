import NewsPublish from '../publish-manages/NewsPublish';
import usePublished from '../publish-manages/usePublished';
import { Button } from 'antd';
export default function Sunset() {
  const { dataSource, handleDelete } = usePublished(3);
  return (
    <div>
      <NewsPublish
        dataSource={dataSource}
        button={(id) => (
          <Button
            danger
            onClick={() => handleDelete(id)}
          >
            删除
          </Button>
        )}
      ></NewsPublish>
    </div>
  );
}
