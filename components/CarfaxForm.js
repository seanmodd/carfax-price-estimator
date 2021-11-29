function CarfaxForm() {
  return (
    <div className={styles.form}>
      <span>Select Maker</span>
      <Select id="demo-simple-select" value={makeValue} onChange={selectMake}>
        {makesData?.map((item, i) => (
          <MenuItem key={i?.toString()} value={item.make}>
            {item.make}
          </MenuItem>
        ))}
      </Select>

      {/* model select */}
      <span>Select Model</span>
      <Select id="demo-simple-select" value={modelValue} onChange={selectModel}>
        {modelsData?.map((item, i) => (
          <MenuItem key={i?.toString()} value={item.model}>
            {item.model}
          </MenuItem>
        ))}
      </Select>

      {/* year select */}
      <span>Select Model</span>
      <Select id="demo-simple-select" value={yearValue} onChange={selectYear}>
        {yearsData?.map((item, i) => (
          <MenuItem key={i?.toString()} value={item.year}>
            {item.year}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}

export default CarfaxForm;
