for %%F in (*.jpg) do (

    REM ffmpeg -y -i %%F -q:v 20 %%F"
    ffmpeg -y -i %%F -vf scale=400:-1 %%F   
)
