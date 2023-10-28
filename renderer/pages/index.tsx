import { useEffect } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const IndexPage = () => {
  useEffect(() => {
    const handleMessage = (_event, args) => alert(args);

    // add a listener to 'message' channel
    global.ipcRenderer.addListener('message', handleMessage);

    return () => {
      global.ipcRenderer.removeListener('message', handleMessage);
    };
  }, []);

  const onSayHiClick = () => {
    global.ipcRenderer.send('message', 'hi from next');
  };

  const onClickSetFile = async () => {
    await global.ipcRenderer.invoke('dialog:open');
  };

  return (
    <Layout title="Home | Next.js + TypeScript + Electron Example">
      <h1>Hello Next.js 👋</h1>
      <button onClick={onSayHiClick}>Say hi to electron</button>
      <p>
        <Link href="/about">About</Link>
      </p>
      <button onClick={onClickSetFile}>ファイルを選択</button>
    </Layout>
  );
};

export default IndexPage;
