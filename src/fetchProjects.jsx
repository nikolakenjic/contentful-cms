import { createClient } from 'contentful';
import { useEffect, useState } from 'react';

const client = createClient({
  space: 'adcgtmi09ubd',
  environment: 'master',
  accessToken: import.meta.env.VITE_KEY_API,
});

const useFetchProjects = () => {
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState([]);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await client.getEntries({ content_type: 'projects' });
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;

        return {
          title,
          url,
          id,
          img,
        };
      });

      setProject(projects);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, project };
};

export default useFetchProjects;
