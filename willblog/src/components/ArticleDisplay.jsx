import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ArticleDisplay = () => {

    const {id} = useParams() 
    const [content, setContent] = useState('');
    useEffect(() => {	
		const fetchMarkdown = async () => {
			try {
				const response = await fetch('/src/articles/${id}.md');
				const text = await response.text();
				console.log(text);
				console.log(id);
				setContent(text);
			} catch (error) {
				console.error('Error fetching matching md file:', error);
			}
		};
		
		fetchMarkdown();
      }, [id]);


    

    return (
        <div>
		//	<md-block> {content} </md-block>
			{content}
        </div>
      );

  }; 

  export default ArticleDisplay;
