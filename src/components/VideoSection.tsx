"use client";

import React from "react";
import { Column, Heading, Text, RevealFx, Card } from "@/once-ui/components";
import styles from "./VideoSection.module.scss";

interface VideoSectionProps {
  title?: string;
  description?: string;
  videoSrc: string;
  posterSrc?: string;
}

// Function to convert YouTube URL to embed URL
const getYouTubeEmbedUrl = (url: string): string => {
  // Handle youtu.be URLs
  if (url.includes('youtu.be/')) {
    const videoId = url.split('youtu.be/')[1];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  
  // Handle youtube.com URLs
  if (url.includes('youtube.com/watch?v=')) {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  
  // If it's already an embed URL, return as is
  if (url.includes('youtube.com/embed/')) {
    return url;
  }
  
  return url;
};

// Function to check if URL is a YouTube URL
const isYouTubeUrl = (url: string): boolean => {
  return url.includes('youtube.com') || url.includes('youtu.be');
};

export const VideoSection: React.FC<VideoSectionProps> = ({
  title = "Meet Me",
  description = "Get to know me better through this personal introduction",
  videoSrc,
  posterSrc,
}) => {
  const isYouTube = isYouTubeUrl(videoSrc);
  const embedUrl = isYouTube ? getYouTubeEmbedUrl(videoSrc) : videoSrc;

  return (
    <RevealFx translateY="16" delay={0.8}>
      <Column maxWidth="l" gap="l" horizontal="center" fillWidth>
        <Column maxWidth="m" gap="m" horizontal="center" paddingX="m">
          <Heading variant="display-strong-s" wrap="balance">
            {title}
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            {description}
          </Text>
        </Column>
        
        <Card
          className={styles.videoCard}
          padding="xl"
          border="neutral-weak"
          background="neutral-weak"
          data-border="rounded"
          fillWidth
        >
          <div className={styles.videoContainer}>
            {isYouTube ? (
              <iframe
                className={styles.video}
                src={embedUrl}
                title={title}
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <video
                className={styles.video}
                controls
                poster={posterSrc}
                preload="metadata"
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </Card>
      </Column>
    </RevealFx>
  );
}; 