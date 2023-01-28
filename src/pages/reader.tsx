import { GetServerSideProps } from 'next';
import path from 'path';
import fs from 'fs';
import { Space } from 'antd';
import { DataType } from '@/types/data.type';
import ReaderTable from '@/components/readerTable';

const Reader = ({ data } : {data: DataType[]}) => {
  return (
    <Space wrap>
     <ReaderTable data={data}/>
    </Space>
  );
};

export default Reader;

export const getServerSideProps: GetServerSideProps = async (_) => {
  const data = [];
  const folderPath = path.join(process.cwd(), 'public/files');

  const files = fs.readdirSync(folderPath);
  for (const file of files) {
    const filePath = path.join(folderPath, file);
    const fileData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    data.push(fileData);
  }
  return {
    props: {
      data,
    },
  };
};
