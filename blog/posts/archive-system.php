<?php
  $post_date = 'Posted 6 / 20 / 2014';
  $post_title = ' Archive System ';
  $post_cotent = '
                <p>
                    While I was building this site I made several choices that I felt would improve the general user experience. One of these choices
                    was to display only a set number of posts on my main page. It occurred to me when I made this choice that users may wish to view older
                    posts. I decided that I would just put all my posts onto one page that I would call the archive. An issue arose, how would users find
                    specific articles or articles on specific topics? My solution was an archive search that I think is pretty unique.
                    <br /><br />
                    The archive system is unique in that it simply searches every container on the page that contains a post. This provides an extremely light
                     weight solution that personally I think looks better and suits my needs better than the slandered search box. It still has some issues that 
                    shouldn’t affect the user’s experience but that I will eventually have to fix. 
                    <br /><br />
                    This is also a cleaner solution that I think is pretty unique. As time goes on and I add more to this site and more posts are posted I will 
                    revisit how effect it is. However, for now it is exactly what I need. The archive can be found <a href="archive-system.htm">here</a>.
                </p>
  ';
?>

<?php include('post.php'); ?>