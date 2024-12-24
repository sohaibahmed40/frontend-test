import { useEffect, useRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../global/Button';
import { ProfileSchema } from '../../schema';
import { IMAGES } from '../../assets/images';
import { Edit } from '../../assets/icons';

const Profile = () => {
  const [imageBase64, setImageBase64] = useState('');
  const imgRef = useRef();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(ProfileSchema),
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('userProfile'));
    if (savedData) {
      Object.keys(savedData).forEach((key) => {
        setValue(key, savedData[key]);
      });
      if (savedData.image) {
        setImageBase64(savedData.image);
      }
    }
  }, [setValue]);

  const onSubmit = (data) => {
    localStorage.setItem('userProfile', JSON.stringify(data));
  };

  const imageClick = () => {
    imgRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        setImageBase64(base64Image);
        setValue('image', base64Image);
      };
      reader.readAsDataURL(file);
    }
    event.target.value = '';
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-8 flex-wrap">
        <div className="flex justify-center md:justify-start w-full md:w-[20%]">
          <div
            className="w-[90px] h-[90px] relative cursor-pointer"
            onClick={imageClick}
          >
            <img
              src={imageBase64 || IMAGES.ProfileUser}
              alt="Profile"
              className="w-[90px] h-[90px] rounded-full object-cover"
            />
            <img src={Edit} alt="Edit" className="absolute bottom-0 right-0" />
          </div>

          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <input
                type="file"
                className="hidden"
                ref={imgRef}
                onChange={(e) => {
                  handleImageChange(e);
                  field.onChange(e);
                }}
              />
            )}
          />
          {errors.image && (
            <p className="text-xs text-red-600">{errors.image.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-5 w-full md:w-[75%]">
          <div className="flex items-center flex-wrap gap-[30px]">
            <div className="flex flex-col gap-3 w-full md:w-[45%]">
              <label className="text-black text-base">Your Name</label>

              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    className="border border-[#DFEAF2] rounded-[15px] text-secondary text-[15px] py-4 px-5 outline-none md:min-w-[300px]"
                  />
                )}
              />
              {errors.name && (
                <p className="text-xs text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-3 w-full md:w-[45%]">
              <label className="text-black text-base">User Name</label>
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    className="border border-[#DFEAF2] rounded-[15px] text-secondary text-[15px] py-4 px-5 outline-none md:min-w-[300px]"
                  />
                )}
              />
              {errors.username && (
                <p className="text-xs text-red-600">
                  {errors.username.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center flex-wrap gap-[30px]">
            <div className="flex flex-col gap-3 w-full md:w-[45%]">
              <label className="text-black text-base">Email</label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input
                    type="email"
                    {...field}
                    className="border border-[#DFEAF2] rounded-[15px] text-secondary text-[15px] py-4 px-5 outline-none md:min-w-[300px]"
                  />
                )}
              />
              {errors.email && (
                <p className="text-xs text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-3 w-full md:w-[45%]">
              <label className="text-black text-base">Password</label>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <input
                    type="password"
                    {...field}
                    className="border border-[#DFEAF2] rounded-[15px] text-secondary text-[15px] py-4 px-5 outline-none md:min-w-[300px]"
                  />
                )}
              />
              {errors.password && (
                <p className="text-xs text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center flex-wrap gap-[30px]">
            <div className="flex flex-col gap-3 w-full md:w-[45%]">
              <label className="text-black text-base">Date of Birth</label>
              <Controller
                name="dob"
                control={control}
                render={({ field }) => (
                  <input
                    type="date"
                    {...field}
                    className="border border-[#DFEAF2] rounded-[15px] text-secondary text-[15px] py-4 px-5 outline-none md:min-w-[300px]"
                  />
                )}
              />
              {errors.dob && (
                <p className="text-xs text-red-600">{errors.dob.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-3 w-full md:w-[45%]">
              <label className="text-black text-base">Present Address</label>
              <Controller
                name="presentAddress"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    className="border border-[#DFEAF2] rounded-[15px] text-secondary text-[15px] py-4 px-5 outline-none md:min-w-[300px]"
                  />
                )}
              />
              {errors.presentAddress && (
                <p className="text-xs text-red-600">
                  {errors.presentAddress.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center flex-wrap gap-[30px]">
            <div className="flex flex-col gap-3 w-full md:w-[45%]">
              <label className="text-black text-base">Permanent Address</label>
              <Controller
                name="permanentAddress"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    className="border border-[#DFEAF2] rounded-[15px] text-secondary text-[15px] py-4 px-5 outline-none md:min-w-[300px]"
                  />
                )}
              />
              {errors.permanentAddress && (
                <p className="text-xs text-red-600">
                  {errors.permanentAddress.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-3 w-full md:w-[45%]">
              <label className="text-black text-base">City</label>
              <Controller
                name="city"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    className="border border-[#DFEAF2] rounded-[15px] text-secondary text-[15px] py-4 px-5 outline-none md:min-w-[300px]"
                  />
                )}
              />
              {errors.city && (
                <p className="text-xs text-red-600">{errors.city.message}</p>
              )}
            </div>
          </div>

          <div className="flex items-center flex-wrap gap-[30px]">
            <div className="flex flex-col gap-3 w-full md:w-[45%]">
              <label className="text-black text-base">Postal Code</label>
              <Controller
                name="postalCode"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    className="border border-[#DFEAF2] rounded-[15px] text-secondary text-[15px] py-4 px-5 outline-none md:min-w-[300px]"
                  />
                )}
              />
              {errors.postalCode && (
                <p className="text-xs text-red-600">
                  {errors.postalCode.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-3 w-full md:w-[45%]">
              <label className="text-black text-base">Country</label>
              <Controller
                name="country"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    className="border border-[#DFEAF2] rounded-[15px] text-secondary text-[15px] py-4 px-5 outline-none md:min-w-[300px]"
                  />
                )}
              />
              {errors.country && (
                <p className="text-xs text-red-600">{errors.country.message}</p>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center md:justify-end w-full">
          <Button
            type="submit"
            title={'Save'}
            className={'w-full md:!w-[150px]'}
          />
        </div>
      </form>
    </div>
  );
};

export default Profile;
