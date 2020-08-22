for %%F in (*.jpg) do (

    ffmpeg -y -i %%F -q:v 20 %%F"
)
