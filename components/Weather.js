import React from 'react';
import Image from 'next/image';

const Weather = ({ data }) => {
  console.log(data);

  const periods = data.properties.periods.slice(0, 5);

  return (
    <section className="relative font-oswald text-gray-600 min-h-full">
      <div
        className="2xl:flex gap-10 text-slate-200"
        style={{ justifyContent: 'center' }}
      >
        {periods.map((period, index) => (
          <div
            key={index}
            className="text-center shadow-2xl p-5 rounded-xl my-5 bg-slate-800/70"
          >
            <h3 className="text-2xl font-medium pb-10">{period.name}</h3>
            <div
              className="pb-10"
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Image
                className="p-1"
                src={`${period.icon}`}
                alt="/"
                width={75}
                height={75}
              />
              <p className="text-8xl">
                {period.temperature}&#176;{period.temperatureUnit}
              </p>
            </div>
            <div>
              <p className="py-1">{period.shortForecast}</p>
            </div>

            <div className="grid grid-cols-2 text-slate-200">
              <p className="py-1">
                Wind Speed: {period.windSpeed} {period.windDirection}
              </p>
              <p className="py-1">
                Humidity: {period.relativeHumidity.value}%
              </p>
              <p className="py-1">
                Chance of Precipitation:{' '}
                {period.probabilityOfPrecipitation.value}%
              </p>
              <p className="py-1">
                Dewpoint: {period.dewpoint.value.toFixed(0)}&#176;
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Weather;