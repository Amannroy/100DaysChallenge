# Create cities file
cities = ["Agra", "Mumbai", "Ahmedabad", "Delhi", "Amritsar", "Bangalore", "Allahabad", "Chennai", "Pune"]

with open("cities.txt", 'w') as f:
    for city in cities:
        f.write(city + '\n')
print("Created cities.txt")

# Filter cities starting with 'A'
with open("cities.txt", 'r') as f:
    a_cities = [line.strip() for line in f if line.strip().startswith('A')]

# Save filtered cities
with open("cities_with_a.txt", 'w') as f:
    for city in a_cities:
        f.write(city + '\n')
        print(f" Found {len(a_cities)} cities starting with 'A'")

# Display result
print("\n Cities starting with 'A':")
for city in a_cities:
    print(f" • {city}")