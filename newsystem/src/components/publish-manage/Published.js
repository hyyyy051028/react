import NewsPublish from '../publish-manages/NewsPublish';
import usePublished from '../publish-manages/usePublished';
import { Button } from 'antd';
export default function Published() {
  const { dataSource, handleSunset } = usePublished(2);
  return (
    <div>
      <NewsPublish
        dataSource={dataSource}
        button={(id) => (
          <Button
            danger
            onClick={() => handleSunset(id)}
          >
            下线
          </Button>
        )}
      ></NewsPublish>
    </div>
  );
}
