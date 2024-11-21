import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {MarkdownBlock, MarkdownSpan, MarkdownElement} from "md-block";
import ReactMarkdown from 'react-markdown';
import '../styles/ArticleDisplay.css'


const ArticleDisplay = () => {

    const {id} = useParams() 
    const [content, setContent] = useState('');
    useEffect(() => {	
		const fetchMarkdown = async () => {
			try {
				const response = await fetch(`${process.env.PUBLIC_URL}/articles/${id}.md`);
				const text = await response.text();
				console.log(text)
				setContent(text);
				console.log(content);
			} catch (error) {
				console.error('Error fetching matching md file:', error);
			}
		};
		
		fetchMarkdown();
      }, [id]);


    return (
		<div className='article-display'>
            <div className='body'>
				<ReactMarkdown children = {content}/>
            </div>
		</div>
      );

  }; 

  export default ArticleDisplay;
